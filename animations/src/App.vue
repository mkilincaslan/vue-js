<template>
    <div class="container mt-5">
        <h3>Animation & Transition</h3>
        <hr>
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <button class="btn btn-success" @click="show = !show">Show/Hide Box</button>
                <br><br>
                <!-- transition gets only one element to add animations that we provide with keywords -->
                <transition name="fade">
                    <div class="alert alert-success" v-show="show">Fade Box</div>
                </transition>
            </div>
            <div class="col-md-6 col-md-offset-3">
                <button class="btn btn-warning" @click="slide = !slide">Slide The Box</button>
                <br><br>
                <transition name="slide" type="animation">
                    <div class="alert alert-warning" v-show="slide">Slide Box</div>
                </transition>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <button class="btn btn-secondary" @click="bounce = !bounce">Bounce The Box</button>
                <br><br>
                <!-- Animate.css has so many animations & we can use these with transition tag -->
                <transition
                    enter-class=""
                    enter-active-class="animate__animated animate__bounce"
                    leave-class=""
                    leave-active-class="animate__animated animate__rubberBand"
                >
                    <div class="alert alert-secondary" v-show="bounce">Bounce & Rubber Band Box</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            show: false,
            slide: false,
            bounce: false
        }
    }
}
</script>

<style>
    /* Fade animations */
    .fade-enter{
        /* First Step */
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{
        /* Already opacity 1 */
    }
    .fade-leave-active{
        /* Last step */
        transition: opacity 1s;
        opacity: 0;
    }

    /* Slide animations */
    .slide-enter{}
    .slide-enter-active{
        animation: slide-in .5s ease-in forwards;
    }
    .slide-leave{}
    .slide-leave-active{
        /* Last step */
        animation: slide-out .5s ease-out forwards;
    }

    @keyframes slide-in {
        /* Slide in animation with keyframes */
        from {
            transform: translateY(-20px);
        }
        to {
            transform: translateY(0px);
        }
    }
    @keyframes slide-out {
        /* Slide out animation with keyframes */
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(-20px);
        }
    }
</style>
