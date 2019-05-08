<template lang="html">
  <img :src="image"></img>

</template>

<script>
export default{ 
        data() {
            return {image: { url: ""}}
        },
        mounted(){
                    axios.defaults.headers.common['x-api-key'] = "DEMO-API-KEY" // Replace this with your API Key
                    let response = axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } ) // Ask for 1 Image, at full resolution
                    .then(response=>(
                    this.image = response.data[0].url // the response is an Array, so just use the first item as the Image
                    ))
        }
    }
</script>
