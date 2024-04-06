package org.lu.df.formula1.utilities;

import java.nio.file.Files;
import java.nio.file.Paths;

public class JsonUtilities {
    public static String readJsonFile(String filePath) {
        String content = "";

        try{
            content = new String(Files.readAllBytes(Paths.get(filePath)));
        } catch (Exception e) {
            e.printStackTrace();
        }

        return content;
    }
}
