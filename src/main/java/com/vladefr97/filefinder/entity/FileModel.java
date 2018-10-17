package com.vladefr97.filefinder.entity;

public class FileModel {

    private String fileName;
    private String absolutePath;
    private boolean isDirectory;

    public FileModel(String fileName, String absolutePath, boolean isDirectory) {
        this.fileName = fileName;
        this.absolutePath = absolutePath;
        this.isDirectory = isDirectory;
    }

    public String getFileName() {
        return fileName;
    }

    public String getAbsolutePath() {
        return absolutePath;
    }

    public boolean isDirectory() {
        return isDirectory;
    }

}
