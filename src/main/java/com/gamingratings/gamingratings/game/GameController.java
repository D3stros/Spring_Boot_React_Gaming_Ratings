package com.gamingratings.gamingratings.game;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("games")
public class GameController {

    @GetMapping
    public List<Game> getAllStudents() {
        return List.of(
                new Game(
                        UUID.randomUUID(),
                        "Civilization 6",
                        "Strategy",
                        10,
                        "https://upload.wikimedia.org/wikipedia/en/3/3b/Civilization_VI_cover_art.jpg"
                ),
                new Game(
                        UUID.randomUUID(),
                        "Rainbow Six Siege",
                        "Shooter",
                        8,
                        "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg"
                )
        );
    }
}
