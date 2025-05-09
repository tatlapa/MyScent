import axios from 'axios';

// Using a proxy service to avoid CORS issues
const PROXY_URL = 'https://api.allorigins.win/raw?url=';

interface AmazonProduct {
    title: string;
    price: string;
    image: string;
    url: string;
}

// Map of perfume brands/names to their image URLs (fallback images)
const PERFUME_IMAGES: Record<string, string> = {
    "Chanel No 5": "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
    "J'adore Dior": "https://images.unsplash.com/photo-1592842232655-e5d345cbc2d0?w=800",
    "La Vie Est Belle": "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800",
    "Black Opium": "https://images.unsplash.com/photo-1588405765997-02255aff295e?w=800",
    "Light Blue": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800",
    "Good Girl": "https://images.unsplash.com/photo-1595425964272-5437c8a18540?w=800"
};

// Fallback images by scent family
const FALLBACK_IMAGES: Record<string, string> = {
    floral: "https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?w=800",
    oriental: "https://images.unsplash.com/photo-1583445095369-9c651e7e5d34?w=800",
    woody: "https://images.unsplash.com/photo-1505253304499-671c55fb57fe?w=800",
    fresh: "https://images.unsplash.com/photo-1595425964272-5437c8a18540?w=800",
    citrus: "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=800",
    default: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800"
};

export async function findPerfumeOnAmazon(perfumeName: string): Promise<AmazonProduct | null> {
    try {
        // Clean up the perfume name
        const cleanName = perfumeName.split('(')[0].trim();

        // Build the Amazon search URL
        const searchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(cleanName)}+perfume&i=luxury-beauty`;

        // Try to find a matching product image
        let productImage = PERFUME_IMAGES[cleanName];

        // If no exact match, try to find a fallback based on scent family
        if (!productImage) {
            const lowerName = cleanName.toLowerCase();
            if (lowerName.includes('floral')) {
                productImage = FALLBACK_IMAGES.floral;
            } else if (lowerName.includes('oriental') || lowerName.includes('spice')) {
                productImage = FALLBACK_IMAGES.oriental;
            } else if (lowerName.includes('wood')) {
                productImage = FALLBACK_IMAGES.woody;
            } else if (lowerName.includes('fresh') || lowerName.includes('aqua')) {
                productImage = FALLBACK_IMAGES.fresh;
            } else if (lowerName.includes('citrus') || lowerName.includes('lemon')) {
                productImage = FALLBACK_IMAGES.citrus;
            } else {
                productImage = FALLBACK_IMAGES.default;
            }
        }

        return {
            title: cleanName,
            price: "$99.99", // Default price since we can't reliably get real prices
            image: productImage,
            url: searchUrl
        };
    } catch (error) {
        console.error('Error searching on Amazon:', error);
        return null;
    }
}
