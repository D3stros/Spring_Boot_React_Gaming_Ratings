package com.gamingratings.gamingratings.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("games")
public class GameController {

    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping
    public List<Game> getAllStudents() {
    return gameService.getAllGames();
    }

    @PostMapping
    public void addNewGame(@RequestBody Game game) {
        gameService.addNewGame(game);
    }
}
