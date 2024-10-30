<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>SiMahir Backend</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
    }

    .route-list {
      list-style: none;
      padding: 0;
    }

    .route-list li {
      margin-bottom: 10px;
    }

    .method {
      display: inline-block;
      padding: 5px 10px;
      border-radius: 3px;
    }

    .method.GET {
      background-color: #198754;
      color: white;
    }

    .method.POST {
      background-color: #ffc107;
      color: black;
    }

    .method.PUT {
      background-color: #0d6efd;
      color: white;
    }

    .method.DELETE {
      background-color: #dc3545;
      color: white;
    }
  </style>
</head>

<body>
  <h1>SiMahir API</h1>

  <ul class="route-list">
    @foreach ($routes as $route)
      <li>
        <ul>
          @foreach ($route->methods as $method)
            @if ($method != 'HEAD')
              <li class="method {{ $method }}">{{ $method }}</li> <strong>{{ $route->uri }}</strong>
            @endif
          @endforeach
        </ul>
      </li>
    @endforeach
  </ul>
</body>

</html>
