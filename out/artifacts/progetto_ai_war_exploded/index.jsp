<%--
  Created by IntelliJ IDEA.
  User: kazuhira
  Date: 24/06/16
  Time: 13:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html ng-app="iftttApp">
  <head>
    <title>$Title$</title>
  </head>
  <script src="./libs/lodash.js"></script>
  <script src="./libs/jquery.js"></script>
  <script src="./libs/jquery-ui.js"></script>

  <script src="./libs/bootstrap.js"></script>
  <script src="./libs/moment.js"></script>
  <script src="./libs/moment-range.js"></script>
  <script src="./libs/angular.js"></script>
  <script src="./libs/angular-route.js"></script>
  <script src="./libs/angular-resource.js"></script>


  <link rel="stylesheet" type="text/css" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/jquery-ui.css">
  <link rel="stylesheet" type="text/css" href="./css/style.css">
  <link rel="stylesheet" type="text/css" href="./css/animate.css">
  <link rel="stylesheet" type="text/css" href="./css/sidebar/simple-sidebar.css">


  <body ng-controller="homeController">
  <div id="main-container">
  <div id="top-navbar-container">
  <nav id="top-navbar" class="navbar navbar-default">
      <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#home">Brand</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                  <li><a href="#menu-toggle" id="menu-toggle">IFTTT Recipes</a></li>
                  <li><a href="#registration" id="menu-toggle">Registration</a></li>
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li role="separator" class="divider"></li>
                          <li><a href="#">Separated link</a></li>
                          <li role="separator" class="divider"></li>
                          <li><a href="#">One more separated link</a></li>
                      </ul>
                  </li>
              </ul>
              <form class="navbar-form navbar-right" role="search">
                      <div class="form-group" style="display: inline" >
                          <input type="text" class="form-control loggedOUT" placeholder="User">
                          <input type="password" class="form-control loggedOUT" placeholder="Pwd">

                      <button type="submit" class="btn btn-default form-control loggedOUT">Login</button>
                      </div>
                      <button type="submit" style="display: none" class="btn btn-default form-control pull-right loggedIN">Logout</button>

              </form>



          </div><!-- /.navbar-collapse -->

      </div><!-- /.container-fluid -->
  </nav>
  </div>
  <div id="wrapper">

      <!-- Sidebar -->
      <div id="sidebar-wrapper">
          <ul class="sidebar-nav">
              <!--
              <li class="sidebar-brand">
                  <a href="#">
                      IFTTT Recipes
                  </a>
              </li>
              -->
              <li style="visibility: hidden">
                  <a href="#home"></a>
              </li>
              <li>
                  <a href="#gCalendar">Google Calendar</a>
              </li>
              <li>
                  <a href="#yWeather">Yahoo Weather</a>
              </li>
              <li>
                  <a href="#yFinance">Yahoo Finance</a>
              </li>
              <li>
                  <a href="#DropBox">DropBox</a>
              </li>
              <li>
                  <a href="#instructions">How to use</a>
              </li>
          </ul>
      </div>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper" >
      <div class="container-fluid">
          <div class="row">
              <div class="col-lg-12">

                  <div ng-view></div>
                  <script src="./client-engine/engine.js"></script>

              </div>
          </div>
      </div>
  </div>
      <!-- /#page-content-wrapper -->

  </div>
  <!-- /#wrapper -->



  <!-- Menu Toggle Script -->
  </div>

  </body>
</html>
