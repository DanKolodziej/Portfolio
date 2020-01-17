<template>
    <div class="project-panel">
        <img class="project-thumbnail" src="@/assets/images/webpack.png"/>
        <div class="project-text">
            <h3>
                {{ title }}
            </h3>
            <p>
                {{ description }}
            </p>
            <a v-if="link != ''" class="project-link" :href="link" target="_blank">Link</a>
            <span v-else class="project-no-link">No link available</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "project-panel",
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
    }

    .project-text {
        padding: 2%;
        /*border-top: 2px solid #ff0000;*/
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 130px;
    }

    .project-text h3, .project-text p {
        margin: 0;
    }

    .project-link {
        display: block;
        width: fit-content;
        margin: 0 auto;
        font-weight: bold;
        text-decoration: none;
        color: #0086da;
    }

    .project-link:hover {
        text-decoration: underline;
    }

    .project-no-link {
        font-weight: bold;
        color: #ff0000;
    }

    .project-thumbnail {
        width: 100%;
        height: 156px;
        border-bottom: 2px solid #ff0000;
        object-fit: cover;
    }

</style>