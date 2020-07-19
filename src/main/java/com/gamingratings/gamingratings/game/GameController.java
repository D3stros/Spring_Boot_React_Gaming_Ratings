package com.gamingratings.gamingratings.game;

import com.gamingratings.gamingratings.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/games")
public class GameController {

    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping
    public List<Game> getAllGames() {
    return gameService.getAllGames();
    }

    @PostMapping
    public void addNewGame(@RequestBody @Valid Game game) {
        gameService.addNewGame(game);
    }
}
