# Blazor-Component-AdminLTE-v3.2.0

# 🦝 기본세팅순서

## 🦝 1. _Layout.cshtml

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="~/" />


      <!-- Google Font: Source Sans Pro -->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
      <!-- Font Awesome Icons -->
      <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
      <!-- IonIcons -->
      <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- DataTables -->
      <link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
      <link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
      <link rel="stylesheet" href="plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
      <!-- Theme style -->
      <link rel="stylesheet" href="dist/css/adminlte.min.css">

    <component type="typeof(HeadOutlet)" render-mode="ServerPrerendered" />
</head>


<body class="hold-transition sidebar-mini">
    @RenderBody()

    <!-- Plugins Script Here -->
    <!-- 페이지별 필요한 라이브러리 추가 -->
    <!-- ex_ JQeury,  -->

    <!-- AdminLTE -->
    <script src="dist/js/adminlte.js"></script>

    <!-- Blazor Server SCRIPTS -->
    <script src="_framework/blazor.server.js"></script>
</body>    
```

## 🦝 2. MainLayout.razor

```js
@inherits LayoutComponentBase

<div class="wrapper">

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Sidebar Menu -->
      <WebMES_Blazor1.Pages.menu.MainMenuStarter />
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <!-- 하위 페이지가 로드되는 위치 -->
  <div class="content-wrapper">
      
      @Body


  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.2.0
    </div>
  </footer>
</div>
<!-- ./wrapper -->

```

## 🦝 3. App.razor

```js
        <NotFound>
            <PageTitle>Not found</PageTitle>
            <LayoutView Layout="@typeof(MainLayout)">
                <!-- Content Header (Page header) -->
                <section class="content-header">
                  <div class="container-fluid">
                    <div class="row mb-2">
                      <div class="col-sm-6">
                        <h1>404 Error Page</h1>
                      </div>
                      <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                          <li class="breadcrumb-item"><a href="/">Home</a></li>
                          <li class="breadcrumb-item active">404 Error Page</li>
                        </ol>
                      </div>
                    </div>
                  </div><!-- /.container-fluid -->
                </section>
                <!-- Main content -->
                <section class="content">
                  <div class="error-page">
                    <h2 class="headline text-warning"> 404</h2>

                    <div class="error-content">
                      <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                      <p>
                        We could not find the page you were looking for.
                        Meanwhile, you may <a href="/">return to dashboard</a> or try using the search form.
                      </p>

                      <form class="search-form">
                        <div class="input-group">
                          <input type="text" name="search" class="form-control" placeholder="Search">

                          <div class="input-group-append">
                            <button type="submit" name="submit" class="btn btn-warning"><i class="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                        <!-- /.input-group -->
                      </form>
                    </div>
                    <!-- /.error-content -->
                  </div>
                  <!-- /.error-page -->
                </section>
                <!-- /.content -->
            </LayoutView>
        </NotFound>

```

## 🦝 마무리

작업을 하다보면 자바스크립트와 C#간 그리고 CSS의 동작에 문제가 발생을 한다.
순서와 배치의 차이인지.. 탐색을 못했다...