<template>
    <div class="project-panel" @mouseleave="isHovered = false">
        <button class="modal-button" v-show="isHovered" @mouseenter="isButtonHovered = true" @mouseleave="isButtonHovered = false" @click="isActiveModal = true">Check</button>
        <img class="project-thumbnail" @mouseenter="isHovered = true" src="@/assets/images/webpack.png" :class="{hover: isButtonHovered}"/>
        <div class="project-text" @mouseenter="isHovered = false">
            <h3>
                {{ title }}
            </h3>
            <p>
                {{ description }}
            </p>
            <a v-if="link != ''" class="project-link" :href="link" target="_blank">Link</a>
            <span v-else class="project-no-link">No link available</span>
        </div>
        <transition name="modal-appear">
            <div class="project-modal" v-show="isActiveModal" @click="isActiveModal = false">
                <transition name="modal-pop-up">
                    <div class="project-modal-content" v-show="isActiveModal" @click.stop>
                        <img class="project-modal-thumbnail" src="@/assets/images/webpack.png"/>
                        <div class="project-modal-text">
                            <h3>
                                {{ title }}
                            </h3>
                            <p>
                                {{ description }}
                            </p>
                            <a v-if="link != ''" class="project-modal-link" :href="link" target="_blank">Link</a>
                            <span v-else class="project-modal-no-link">No link available</span>
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
        max-width: 236px;
        background-color: #fff;
        color: #333333;
        border-radius: 5px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
        margin: 10px 5px 0 5px;
        border: 2px solid #ff0000;
        /*display: flex;*/
        /*flex-direction: column;*/
        position: relative;
    }

    .project-text, .project-modal-text {
        padding: 2%;
        /*border-top: 2px solid #ff0000;*/
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 130px;
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
    }

    .project-link:hover, .project-modal-link:hover {
        text-decoration: underline;
    }

    .project-no-link, .project-modal-no-link {
        font-weight: bold;
        color: #ff0000;
    }

    .project-thumbnail {
        width: 100%;
        height: 156px;
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
        top: 20%;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        z-index: 99;
        font-family: 'Raleway', sans-serif;
        transition: 0.45s;
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

    /*.modal-pop-up-enter-to, .modal-pop-up-leave {*/
    /*    transform: scale(1);*/
    /*}*/

    .project-modal {
        /*display: none;*/
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
        /*opacity: 0;*/
        /*transition: 0.45s ease;*/
    }

    /*.project-modal.visible {*/
    /*    opacity: 1;*/
    /*}*/

    .project-modal-content {
        background-color: #fff;
        border: 2px solid #ff0000;
        border-radius: 5px;
        width: 80%;
        margin: 0 auto;
        /*transition: 250ms ease;*/
        /*transform: scale(0.8);*/
    }

    /*.project-modal-content.visible {*/
    /*    transform: scale(1);*/
    /*}*/

    .project-modal-text h3, .project-modal-text p {
        margin: 0;
    }

    .project-modal-thumbnail {
        width: 100%;
        height: 256px;
        border-bottom: 2px solid #ff0000;
        object-fit: cover;
    }

    @media (max-width: 550px) {
        .project-panel {
            width: calc(96% - 4px);
            max-width: none;
            margin: 10px auto 0;
        }
    }

</style>