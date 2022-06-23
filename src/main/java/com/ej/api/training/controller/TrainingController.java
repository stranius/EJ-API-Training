package com.ej.api.training.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TrainingController {

    @GetMapping(value = "/healthcheck")
    public String healthcheck(){
        return "OK !";
    }

}
