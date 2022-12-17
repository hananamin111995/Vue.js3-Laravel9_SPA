<!--<template>-->
<!--    <div>-->
<!--        <div v-if="foundCodes" class="level">-->
<!--            <div class="level-item has-text-centered">-->
<!--                <div>-->
<!--                    <p class="heading">{{foundCodes.type}}</p>-->
<!--                    <p class="title">{{foundCodes.code}}</p>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <nav class="level" role="navigation" aria-label="main navigation">-->
<!--            <div v-show="!scannerActive" class="level-item">-->
<!--                <a @click="start" class="button">Start Scanner</a>-->
<!--            </div>-->

<!--            <div v-show="scannerActive" class="level-item">-->
<!--                <a @click="stop" class="button">Stop Scanner</a>-->
<!--            </div>-->
<!--        </nav>-->
<!--        <div id="videoWindow" class="video"></div>-->
<!--    </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { Component, Prop, Vue } from "vue-property-decorator";-->
<!--import Quagga from "quagga";-->
<!--interface barcode {-->
<!--    code: string;-->
<!--    type: string;-->
<!--}-->
<!--interface codeResult {-->
<!--    code: string;-->
<!--    format: string;-->
<!--}-->
<!--@Component-->
<!--export default class Scanner extends Vue {-->
<!--    scannerActive: boolean = false;-->
<!--    foundCodes: barcode | null = null;-->
<!--    start() {-->
<!--        this.scannerActive = true;-->
<!--        const config: object = {-->
<!--            locate: true,-->
<!--            inputStream: {-->
<!--                name: "live",-->
<!--                type: "LiveStream",-->
<!--                target: document.querySelector("#videoWindow")-->
<!--            },-->
<!--            decoder: {-->
<!--                readers: ["ean_reader"],-->
<!--                multiple: true-->
<!--            },-->
<!--            locator: {-->
<!--                halfSample: true,-->
<!--                patchSize: "medium"-->
<!--            }-->
<!--        };-->
<!--        Quagga.init(config, err => {-->
<!--            if (err) {-->
<!--                console.log(err);-->
<!--                return;-->
<!--            }-->
<!--            console.log("initialization complete");-->
<!--            Quagga.start();-->
<!--        });-->
<!--    }-->
<!--    stop() {-->
<!--        this.scannerActive = false;-->
<!--        Quagga.stop();-->
<!--    }-->
<!--    mounted() {-->
<!--        Quagga.onDetected((data: Array<object>) => {-->
<!--            // console.log(data);-->
<!--            const foundResult = data[0];-->
<!--            const foundCode: barcode = {-->
<!--                code: foundResult.codeResult.code,-->
<!--                type: foundResult.codeResult.format-->
<!--            };-->
<!--            console.log(foundCode);-->
<!--            this.foundCodes = foundCode;-->
<!--            this.$emit("found", foundCode);-->
<!--        });-->
<!--    }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.video {-->
<!--    width: 100%;-->
<!--}-->
<!--</style>-->
