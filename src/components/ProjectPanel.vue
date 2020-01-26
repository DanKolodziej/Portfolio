<template>
    <div class="project-panel" @mouseleave="isHovered = false">
        <button class="modal-button" v-show="isHovered" @mouseenter="isButtonHovered = true" @mouseleave="isButtonHovered = false" @click="isActiveModal = true">Check</button>
        <img class="project-thumbnail" @mouseenter="isHovered = true" :src="require('@/assets/images/' + imageSrc)" :class="{hover: isButtonHovered}"/>
        <div class="project-text" @mouseenter="isHovered = false">
            <h3>
                {{ title }}
            </h3>
            <p>
                {{ description }}
            </p>
            <a class="project-link" :class="{'no-link': hasNoLink}" :href="link" target="_blank">Link</a>
        </div>
        <transition name="modal-appear">
            <div class="project-modal" v-show="isActiveModal" @click="isActiveModal = false">
                <transition name="modal-pop-up">
                    <div class="project-modal-content" v-show="isActiveModal" @click.stop>
                        <img class="project-modal-thumbnail" :src="require('@/assets/images/' + imageSrc)"/>
                        <div class="project-modal-text">
                            <h3>
                                {{ title }}
                            </h3>
                            <p>
                                {{ description }}
                            </p>
                            <p v-if="descriptionTwo != ''">
                                {{ descriptionTwo }}
                            </p>
                            <p>
                                Main Technologies: <span v-for="(technology, index) in technologies"> {{ technology }}
                                <span v-if="index != technologies.length - 1"> | </span></span>
                            </p>
                            <div class="project-modal-bottom-row">
                                <a v-if="link != ''" class="project-modal-link" :href="link" target="_blank">Link</a>
                                <button class="modal-close-button" @click="isActiveModal = false">Close</button>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "project-panel",
        data () {
            return {
                isHovered: false,
                isButtonHovered: false,
                isActiveModal: false
            }
        },
        computed: {
            hasNoLink: function () {
                return this.link == '';
            }
        },
        props: {
            imageSrc: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            descriptionTwo: {
                type: String,
                required: false
            },
            technologies: {
                type: Array,
                required: true
            },
            link: {
                type: String,
                required: false
            }
        }
    }
</script>

<style scoped>

    .project-panel {
        width: 33%;
        background-color: #fff;
        color: #333333;
        border-radius: 5px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
        margin: 10px 5px 0 5px;
        border: 2px solid #ff0000;
        position: relative;
    }

    .project-text, .project-modal-text {
        padding: 2%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 130px;
    }

    .project-modal-text {
        height: auto;
    }

    .project-text h3, .project-text p {
        margin: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .project-link, .project-modal-link {
        display: block;
        width: fit-content;
        margin: 0 auto;
        font-weight: bold;
        text-decoration: none;
        color: #0086da;
        border-bottom: 1px solid #fff;
        transition: 350ms ease;
    }

    .project-link:hover, .project-modal-link:hover {
        border-bottom: 1px solid #0086da;
    }

    .no-link {
        visibility: hidden;
    }

    .project-no-link, .project-modal-no-link {
        font-weight: bold;
        color: #ff0000;
        border-bottom: 1px solid #fff;
    }

    .project-thumbnail {
        width: 100%;
        border-bottom: 2px solid #ff0000;
        object-fit: cover;
        transition: 0.45s ease;
        cursor: pointer;
    }

    .project-thumbnail:hover {
        filter: brightness(0.5);
    }

    .project-thumbnail.hover {
        filter: brightness(0.5);
    }

    .modal-button {
        background-color: transparent;
        border: 2px solid #ff0000;
        padding: 7px 14px;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        position: absolute;
        top: -130px;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        height: 41.33px;
        z-index: 99;
        font-family: 'Raleway', sans-serif;
        transition: 0.35s;
    }

    .modal-button:hover {
        background: #ff0000;
        color: #fff;
    }

    .modal-appear-enter-active, .modal-appear-leave-active {
        transition: 450ms ease;
    }

    .modal-appear-enter, .modal-appear-leave-to {
        opacity: 0;
    }

    .modal-pop-up-enter-active, .modal-pop-up-leave-active {
        transition: 350ms ease;
    }

    .modal-pop-up-enter, .modal-pop-up-leave-to {
        transform: scale(0.8);
    }

    .project-modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    }


    .project-modal-content {
        background-color: #fff;
        border: 2px solid #ff0000;
        border-radius: 5px;
        width: 85%;
        max-width: 700px;
        margin: 0 auto;
    }

    .project-modal-text h3, .project-modal-text p {
        margin: 0 0 0.5em;
    }

    .project-modal-thumbnail {
        width: 100%;
        border-bottom: 2px solid #ff0000;
        object-fit: cover;
    }

    .project-modal-bottom-row {
        display: flex;
        align-items: center;
    }

    .project-modal-link, .project-modal-no-link {
        margin: 0 0 0 4%;

    }

    .modal-close-button {
        background-color: transparent;
        border: 2px solid #ff0000;
        padding: 7px 14px;
        color: #ff0000;
        font-weight: bold;
        cursor: pointer;
        display: inline-block;
        margin-left: auto;
        margin-right: 4%;
        font-family: 'Raleway', sans-serif;
        transition: 0.35s;
    }

    .modal-close-button:hover {
        background-color: #ff0000;
        color: #fff;
    }

    @media (max-width: 1280px) {
        .project-modal-content {
            max-width: 600px;
        }
    }

    @media (max-width: 550px) {
        .project-panel {
            width: calc(96% - 4px);
            max-width: none;
            margin: 10px auto 0;
        }
    }

</style>