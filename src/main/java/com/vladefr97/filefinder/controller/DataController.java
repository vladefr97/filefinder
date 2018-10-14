package com.vladefr97.filefinder.controller;


import com.vladefr97.filefinder.entity.FileModel;
import com.vladefr97.filefinder.entity.FileView;
import com.vladefr97.filefinder.entity.Message;
import com.vladefr97.filefinder.entity.ServerAnswer;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.io.*;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.AccessDeniedException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.List;
import java.util.logging.Logger;

@RestController
public class DataController {

    private static Logger log = Logger.getLogger(DataController.class.getName());

    public static void main(String[] args) {

    }

    @RequestMapping(value = "/getFilesByText", method = RequestMethod.GET)
    public ServerAnswer getFilesByText(@RequestParam("selectedDirectory") String dirPath, @RequestParam("text") String text, @RequestParam("fileFormat") String fileFormat) throws IOException {

        File file = new File(dirPath);
        List<FileView> fileViewList = new ArrayList<>();
        try {

            if (!file.isDirectory()) {
                fileViewList.add(new FileView(file.getName(), readUsingScanner(file.getAbsolutePath())));
            } else {
                log.info("reading File");
                File[] fileList = Objects.requireNonNull(file.listFiles(file1 -> file1.getName().endsWith(fileFormat)));
                for (File aFileList : fileList)
                    fileViewList.add(new FileView(aFileList.getName(), readUsingScanner(aFileList.getAbsolutePath())));
            }
        } catch (Exception e) {
            return new ServerAnswer<>(new Message(e.toString(), false), null);
        }

        Message msg;
        if (fileViewList.size() != 0)
            msg = new Message("Найденны файлы", true);
        else msg = new Message("Не удалось ничего найти...", false);

        return new ServerAnswer<>(msg, fileViewList);
    }


    @RequestMapping("/rootFiles")
    public FileModel[] rootFiles() {
        File[] roots = File.listRoots()[0].listFiles();
        FileModel[] models = new FileModel[roots.length];

        for (int i = 0; i < models.length; i++)
            models[i] = new FileModel(roots[i].getName(), roots[i].getAbsolutePath(), roots[i].isDirectory());
        return models;


    }


    @RequestMapping("/getFile/{filePath}")
    public FileModel[] getChildFiles(@PathVariable String filePath) {
        System.out.println(filePath);
        filePath = filePath.replace("<prefix>", "/");

        System.out.println(filePath);
        File file = new File("/" + filePath);


        File[] resultFiles = file.listFiles();
        if (resultFiles == null) return null;
        FileModel[] fileModels = new FileModel[resultFiles.length];

        for (int i = 0; i < fileModels.length; i++)
            fileModels[i] = new FileModel(resultFiles[i].getName(), resultFiles[i].getAbsolutePath(), resultFiles[i].isDirectory());
        return fileModels;
    }

    @RequestMapping("/getFileText/{filePath}")
    public String getFileText(@PathVariable String filePath) throws IOException {

        filePath = filePath.replace("<prefix>", "/");
        Desktop desktop = null;
        if (Desktop.isDesktopSupported()) {
            desktop = Desktop.getDesktop();
            desktop.open(new File(filePath));
            return "";
        } else {

            String result = null;
            try {
                result = readUsingScanner(filePath);
            } catch (AccessDeniedException e) {
                return e.toString();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return result;
        }


    }

    private static String readUsingFile(File file) throws IOException {
        List<String> lines = Files.readAllLines(Paths.get(file.getAbsolutePath()), Charset.defaultCharset());
        StringBuilder result = new StringBuilder();
        for (String item : lines)
            result.append(item);

        return result.toString();
    }

    private static String readUsingFileReader(File file) {
        StringBuilder resultString = new StringBuilder();

        try {
            FileInputStream fin = new FileInputStream(file);
            InputStreamReader inputStreamReader = new InputStreamReader(fin, StandardCharsets.US_ASCII);
            BufferedReader br = new BufferedReader(inputStreamReader);
            String line;
            while ((line = br.readLine()) != null) {
                resultString.append(line);
            }
        } catch (IOException e) {
            return e.toString();

        }


        return resultString.toString();
    }

    private static String readUsingScanner(String fileName) throws IOException {
        Scanner scanner = new Scanner(Paths.get(fileName), StandardCharsets.UTF_8.name());
        //здесь мы можем использовать разделитель, например: "\\A", "\\Z" или "\\z"
        String data = scanner.useDelimiter("\\A").next();
        scanner.close();
        return data;
    }

}
