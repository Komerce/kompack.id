<template>
  <form>
  <h2>Phone Number Validation</h2>
  <label for="phonenum">Phone Number (format: xxxx-xxx-xxxx):</label><br/>
  <input id="phonenum" type="tel" pattern="^\d{4}-\d{3}-\d{4}$" required >
  
  <input type="submit" value="Submit">
  <p class="p">Demo by Agbonghama Collins. <a href="http://www.sitepoint.com/client-side-form-validation-html5/">See article</a>.</p>
</form>
</template>

<script>

export default {};
</script>

<style scoped>
input[type="tel"] {
  border: 1px solid #ddd;
  padding: 4px 8px;
}
input[type="tel"]:focus {
  border: 1px solid #000;
}

input[type="submit"] {
  font-weight: bold;
  padding: 4px 8px;
  border:1px solid #000;
  background: #3b5998;
  color:#fff;
}

form {
  width: 50%;
  margin: 0 auto;
}

.p {
  padding-top: 30px;
}
</style>