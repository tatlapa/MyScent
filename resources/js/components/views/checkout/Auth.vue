<script setup lang="ts">

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Login, Register} from './index';
import {Button} from "@/components/ui/button";
import {Link} from '@inertiajs/vue3';

const props = withDefaults(defineProps<{
    currentStep: number
    loading?: boolean
    error?: string | null
}>(), {
    loading: false,
    error: null
})
</script>

<template>
    <div v-show="currentStep === 1">
        <Card>
            <CardHeader>
                <CardTitle>Connexion ou création de compte</CardTitle>
                <CardDescription>
                    Connectez-vous à votre compte ou créez-en un nouveau pour continuer
                </CardDescription>
            </CardHeader>
            <CardContent v-if="!$page.props.auth.user">
                <Tabs defaultValue="login">
                    <TabsList>
                        <TabsTrigger value="login">Connexion</TabsTrigger>
                        <TabsTrigger value="register">Création de compte</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" class="mt-6">
                        <Login/>
                    </TabsContent>
                    <TabsContent value="register" class="mt-6">
                        <Register/>
                    </TabsContent>
                </Tabs>
            </CardContent>
            <CardContent v-else>
                <CardDescription>
                    <div class="flex items-center">
                        <p>Vous etes actuellement connecte en tant que <b>{{ $page.props.auth.user.firstname }}  {{ $page.props.auth.user.lastname }}</b>.</p>
                        <Button as-child variant="link" size="sm" class="ml-2">
                            <Link :href="route('logout')" method="post">
                                Se déconnecter
                            </Link>
                        </Button>
                    </div>

                </CardDescription>

            </CardContent>
        </Card>
    </div>
</template>
