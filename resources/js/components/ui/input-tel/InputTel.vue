<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue';
import { AsYouType, parsePhoneNumber, getCountries, getCountryCallingCode } from 'libphonenumber-js';
import { Input } from '@/components/ui/input';
import FlagComponent from './Flag.vue';

interface PhoneInputProps {
    modelValue: string | undefined;
    className?: string;
    inputClassName?: string;
    disabled?: boolean;
}

const props = withDefaults(defineProps<PhoneInputProps>(), {
    className: '',
    inputClassName: '',
    disabled: false,
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const phoneNumber = ref(props.modelValue);
const selectedCountry = ref('FR');
const isMounted = ref(false);

const countryOptions = computed(() => getCountries().map(country => ({
    value: country,
    label: new Intl.DisplayNames(['fr'], { type: 'region' }).of(country),
    dialCode: getCountryCallingCode(country)
})));

onMounted(() => {
    isMounted.value = true;
});

onBeforeUnmount(() => {
    isMounted.value = false;
});

watch(() => props.modelValue, (newValue) => {
    if (isMounted.value) {
        phoneNumber.value = newValue;
    }
}, { immediate: true });

const handleInput = () => {
    if (!isMounted.value) return;
    if(phoneNumber.value === undefined) return;

    const asYouType = new AsYouType();
    const formattedNumber = asYouType.input(phoneNumber.value);
    phoneNumber.value = formattedNumber;

    if (formattedNumber.startsWith('+')) {
        const parsedNumber = parsePhoneNumber(formattedNumber, { extract: true });
        if (parsedNumber && parsedNumber.country) {
            selectedCountry.value = parsedNumber.country;
        }
    }

    emit('update:modelValue', formattedNumber);
};

const selectedCountryOption = computed(() =>
    countryOptions.value.find(c => c.value === selectedCountry.value)
);
</script>

<template>
    <div :class="['flex items-center', props.className]">
        <div class="relative w-full">
            <FlagComponent
                :country="selectedCountry"
                :country-name="selectedCountryOption?.label"
                class="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <Input
                v-model="phoneNumber"
                :class="['pl-12', props.inputClassName]"
                :disabled="props.disabled"
                @input="handleInput"
                :placeholder="`+${selectedCountryOption?.dialCode || ''} xxxxxxxx`"
            />
        </div>
    </div>
</template>
