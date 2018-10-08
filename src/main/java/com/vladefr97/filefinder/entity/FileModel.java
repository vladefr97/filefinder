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

    /* FileModel[] childFiles;


    public static void addNode(FileModel fileModelNode, FileModel parent, int childIndex, File file) {

        System.out.println("file:" + file.getAbsolutePath());
        if (file.getName().compareTo("sys") == 0 || file.getName().compareTo("proc") == 0) return;
        File[] subfiles = file.listFiles();
        if (subfiles != null) {
            fileModelNode = new FileModel(file.getName(), file.getAbsolutePath(), file.isDirectory(), subfiles.length);
            parent.childFiles[childIndex] = fileModelNode;

            for (int i = 0; i < subfiles.length; i++) {
                addNode(fileModelNode.getChildFile(i), parent.childFiles[childIndex],i, subfiles[i]);
            }
        }else{
            parent.childFiles[childIndex] = new FileModel(file.getName(), file.getAbsolutePath(), file.isDirectory(), 0);
        }

    }

    public FileModel() {
    }

    public FileModel(String fileName, String absolutePath) {

        this.fileName = fileName;
        this.absolutePath = absolutePath;

    }

    public FileModel(String fileName, String absolutePath, boolean isDirectory) {
        this.fileName = fileName;
        this.absolutePath = absolutePath;
        this.isDirectory = isDirectory;
    }

    public FileModel(String fileName, String absolutePath, boolean isDirectory, int childsCount) {
        this.fileName = fileName;
        this.absolutePath = absolutePath;
        this.isDirectory = isDirectory;
        this.childFiles = new FileModel[childsCount];
        for(int i=0;i<childsCount;i++)
            childFiles[i] = new FileModel();
    }

    public void addChild(int i, FileModel fileModel) {
        if (i <= childFiles.length)
            childFiles[i] = fileModel;
    }

    public FileModel getChildFile(int i) {

        return childFiles[i];
    }

    public FileModel[] getChildFiles() {
        return childFiles;
    }


    public boolean isDirectory() {
        return isDirectory;
    }

    public String getFileName() {
        return fileName;
    }

    public String getAbsolutePath() {
        return absolutePath;
    }*/
}
