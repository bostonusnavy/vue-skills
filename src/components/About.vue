<template>
    <div class="about">
        <h1>Hello {{ userName }}. This is an About page.</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit proin ridiculus morbi tincidunt egestas sagittis penatibus etiam lobortis, per ultricies nec felis nullam habitant non suscipit placerat mi iaculis aptent id sociosqu. Cum duis risus luctus velit venenatis integer vestibulum potenti, pellentesque neque taciti posuere litora tellus vel, auctor dapibus faucibus platea erat ut leo. Facilisis nascetur ornare nisi posuere at ad potenti mauris, suspendisse primis platea sociosqu cursus dictumst dui hendrerit, montes est molestie litora taciti nam malesuada.
        </p>
        <p>
            Ligula ultrices senectus nascetur varius litora ornare habitasse mus, urna volutpat pretium aenean porttitor cum class, dignissim dictumst euismod lectus turpis taciti iaculis. Fames pharetra vehicula habitasse turpis mollis diam arcu urna mauris, est cursus nullam consequat aliquet facilisis auctor pellentesque sapien vulputate, primis purus metus nunc vel bibendum lectus odio. Eleifend non nec vitae cursus et tincidunt magna tellus cum vestibulum lobortis lacinia, facilisi sem aptent magnis cubilia pretium vel venenatis rutrum bibendum.
        </p>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                userName: this.$route.params.name,
            };
        },
    };
</script>

