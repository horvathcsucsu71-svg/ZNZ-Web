import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;

void main() {
  runApp(ZNZApp());
}

class ZNZApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ZNZ App',
      theme: ThemeData.dark(),
      home: ZNZHome(),
    );
  }
}

class ZNZHome extends StatefulWidget {
  @override
  _ZNZHomeState createState() => _ZNZHomeState();
}

class _ZNZHomeState extends State<ZNZHome> {
  List<dynamic> newsItems = [];

  @override
  void initState() {
    super.initState();
    loadNews();
  }

  Future<void> loadNews() async {
    final String jsonString = await rootBundle.loadString('assets/locales/hu.json');
    final Map<String, dynamic> jsonData = json.decode(jsonString);
    setState(() {
      newsItems = jsonData['news'] ?? [];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('ZNZ Hírek'),
      ),
      body: ListView.builder(
        itemCount: newsItems.length,
        itemBuilder: (context, index) {
          final item = newsItems[index];
          return ListTile(
            title: Text(item['title'] ?? 'Cím nélkül'),
            subtitle: Text(item['content'] ?? 'Tartalom nélkül'),
          );
        },
      ),
    );
  }
}
