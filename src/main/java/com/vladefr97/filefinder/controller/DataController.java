package com.vladefr97.filefinder.controller;


import com.vladefr97.filefinder.entity.FileModel;
import com.vladefr97.filefinder.entity.Message;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.AccessDeniedException;
import java.nio.file.Paths;
import java.util.Scanner;

@RestController
public class DataController {

    public static void main(String[] args) {

    }

    @RequestMapping(value = "/renameFile", method = RequestMethod.GET)
    public Message renameFile(@RequestParam("directory") String directoryName, @RequestParam("oldFileName") String oldFileName, @RequestParam("newFileName") String newFileName) {

        File file = new File(oldFileName);
        newFileName = directoryName + "/" + newFileName;
        boolean done = file.renameTo(new File(newFileName));
        if (done)
            return new Message("Файл успешно переименован", true);
        else
            return new Message("Не удалось переименовать файл...", false);
    }

    @RequestMapping(value = "/createFile", method = RequestMethod.POST)
    public Message createFile(@RequestParam("directory") String directoryName, @RequestParam("fileName") String fileName, @RequestParam("isFile") boolean isFile) {

        String filePath = directoryName + "/" + fileName;
        File file = new File(filePath);
        boolean done;
        if (isFile) {
            try {
                done = file.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
                return new Message(e.getMessage(), false);

            }
        } else {
            done = file.mkdir();
        }
        System.out.println(directoryName);
        System.out.println(fileName);
        if (done)
            return new Message("Файл успешно создан!", true);
        else return new Message("Не удалось создать файл", false);
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

    private static String readUsingScanner(String fileName) throws IOException {
        Scanner scanner = new Scanner(Paths.get(fileName), StandardCharsets.UTF_8.name());
        //здесь мы можем использовать разделитель, например: "\\A", "\\Z" или "\\z"
        String data = scanner.useDelimiter("\\A").next();
        scanner.close();
        return data;
    }

}
