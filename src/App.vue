<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="header_superior">
      <div class="logo">
        <img src="../public/log1.png">
      </div>
      <div class="titulo">
        <img src="../public/tit2.png">
      </div>
    </div>


    <div class="header">



      
      
        <nav class="nav">
          <ul class="nav_menu">
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li><RouterLink to="/Metas_Prog_Prod_Micro">Totales MR</RouterLink></li>
            <li><RouterLink to="/Metas_Subpro_MR">Sub Producto/MR</RouterLink></li>
            <li><RouterLink to="/Metas_Subpro_EESS">Sub Producto/MR/EESS</RouterLink></li>
            <li><RouterLink to="/Metas_EESS_Producto">Por Establecimiento</RouterLink></li>
          </ul>
        </nav>
    </div>
  </header>
  <main class="main">
    <RouterView />
  </main>

  
</template>

<style scoped>
.logo {
  width: 60px;
  height: 60px;
}
.main{
  padding: 80px 10px 0;
}

*{
  margin: 0;
  box-sizing: border-box;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
}

.header_superior{
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  top:0;
  left:0;
  align-items: center;
  justify-content: space-between;
}

.header{
  background-color: #0773D4;
  height: 60px;
  position: fixed;
  left: 0;
  width: 100%;
  box-shadow: 2px 2px 8px 2px #053663;

}

.titulo{
  align-items: center;
  width: 600px;
  height: 60px;
}

.logo img{
  padding: 3px;
  width: 100px;
  height: 60px;
}

.nav{
  display: flex;
  justify-content: center;
}

.nav_menu{
  display: flex;
  list-style: none;
  justify-content: center;
}

nav > ul > li > a{
  width: 100%;
  height: 100%;
  display: flex;
  color: white;
  align-items: center;
  padding: 18px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 100ms ease;
  text-decoration: none;
  
}

nav > ul >li > a:hover{
  background: #044576;
  box-shadow: 0px 0px 5px 5px #a3eef8;
  border-radius: 10px;
  border-color: #a3eef8;
}


@media (max-width:768px){
  .main{
    padding: 350px 10px 0;
  }
  .header_superior{
    height: 60px;
    margin-bottom: 10px;
    display: flex;
    top:0;
    left:0;
    align-items: center;
    justify-content: space-between;
    visibility: hidden;
  }
  
  .header{
    background-color: #0773D4;
    height: 60px;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    box-shadow: 2px 2px 8px 2px #053663;
  
  }
  
  .titulo{
    align-items: center;
    width: 600px;
    height: 60px;
  }
  
  .logo img{
    padding: 3px;
    width: 100px;
    height: 60px;
  }
  
  .nav{
    display: flex;
    justify-content: center;
  }
  
  .nav_menu{
    flex-direction: column;
    list-style: none;
    background-color: #053663;
    position: fixed;
    left: 0;
    top: 60px;
    width: 100%;
    align-items: center;
    padding: 20px 0;
    height: calc(100%-60px);
    overflow-y:auto;
  }
  
  nav > ul > li > a{
    width: 100%;
    height: 100%;
    display: flex;
    color: white;
    align-items: center;
    padding: 18px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all 100ms ease;
    text-decoration: none;
    
  }
  
  
}


</style>
