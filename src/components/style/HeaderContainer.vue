<template>
    <header>
        <div>
            <slot name="title"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
            
    </header>    
</template>

<script>
    export default {}
</script>
<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #056b27;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

header nav {
    
}
</style>