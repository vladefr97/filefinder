package com.vladefr97.filefinder.entity;

public class FileView {
    private String fileName;
    private String fileContent;

    public FileView(String fileName) {
        this.fileName = fileName;
    }

    public FileView(String fileName, String fileContent) {
        this.fileName = fileName;
        this.fileContent = fileContent;
    }

    public String getFileName() {
        return fileName;
    }

    public String getFileContent() {
        return fileContent;
    }
}
