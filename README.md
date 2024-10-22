Progressive Web Application - To Do

https://manifest-gen.netlify.app to create manifest

Using node version v20.9.0

Duplicate file .env.example to .env

fill

```sh
NODE_ENV="production" # if running on npm start

or 

NODE_ENV="development" # if running on npm run dev
```

install package

```sh
npm install
```

running on dev

```sh
npm run dev
```

build for production
```sh
npm run build
```

build for production - running
```sh
npm start
```


## Testing PWA in the Browser:
- Open the application in your browser.
- You can use Chrome DevTools to check the PWA features.
- Go to the Application tab in Chrome DevTools, and you will see that the application can be installed and that there is an active service worker.
- Try to add to home screen on a mobile device, and the application will behave like a native app.

## Adding a Service Worker for Offline
If you are using next-pwa, the service worker is automatically created to handle caching and offline mode. However, here’s how next-pwa helps you:

- Service Worker: It automatically caches static pages and static assets, which keeps your application accessible even when users are offline.
- Caching Strategies: This plugin uses NetworkFirst and CacheFirst strategies for different resources.

## Conclusion
We have successfully created a simple Next.js PWA as a To-Do List App from scratch. In this project, we used the next-pwa plugin to simplify PWA integration, including features such as offline support, service worker, and an installable app.

Some of the key features achieved:

- A simple To-Do application that allows users to add and delete items.
- Offline capability using next-pwa.
- Installable – users can install this application on their devices, similar to a native app.

You can further enhance this application by adding other features, such as storing data in localStorage to retain the data after refreshing, or using push notifications to remind users about their tasks.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Communication with flutter

Create the file in your Flutter project
```sh
lib/webview_page.dart
```

Put the Flutter WebView code in this file
```sh
// lib/webview_page.dart
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class MyWebView extends StatefulWidget {
  @override
  _MyWebViewState createState() => _MyWebViewState();
}

class _MyWebViewState extends State<MyWebView> {
  late WebViewController _controller;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Flutter & Next.js')),
      body: WebView(
        initialUrl: 'https://your-nextjs-pwa-url.com', // Your Next.js PWA URL
        javascriptMode: JavascriptMode.unrestricted,
        onWebViewCreated: (WebViewController controller) {
          _controller = controller;
        },
        javascriptChannels: <JavascriptChannel>{
          _flutterJavascriptChannel(context),
        },
      ),
    );
  }

  JavascriptChannel _flutterJavascriptChannel(BuildContext context) {
    return JavascriptChannel(
      name: 'Flutter',
      onMessageReceived: (JavascriptMessage message) {
        print('Message from Next.js: ${message.message}');
        // Process messages received from the Next.js PWA
      },
    );
  }

  // Function to send message from Flutter to Next.js
  void sendMessageToNextJs(String message) {
    _controller.evaluateJavascript("window.handleFlutterMessage('$message');");
  }
}
```

Modify your main.dart file to include this WebView page
```sh
// lib/main.dart
import 'package:flutter/material.dart';
import 'webview_page.dart'; // Import the WebView page

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter WebView',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyWebView(), // Set the WebView page as the home page
    );
  }
}
```

folder structure flutter
```sh
lib/
 ├── main.dart
 └── webview_page.dart
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
