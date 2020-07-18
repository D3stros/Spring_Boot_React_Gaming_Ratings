package com.gamingratings.gamingratings.game;

import com.gamingratings.gamingratings.LinkValidator;
import com.gamingratings.gamingratings.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class GameService {

    private final GameDataAccessService gameDataAccessService;
    private final LinkValidator linkValidator;

    @Autowired
    public GameService(GameDataAccessService gameDataAccessService, LinkValidator linkValidator) {
        this.gameDataAccessService = gameDataAccessService;
        this.linkValidator = linkValidator;
    }


    List<Game> getAllGames() {
        return gameDataAccessService.selectAllGames();
    }

    void addNewGame(Game game) {
        addNewGame(null, game);
    }

    void addNewGame(UUID gameId, Game game) {
        UUID newGameId = Optional.ofNullable(gameId).orElse(UUID.randomUUID());
        if(!linkValidator.test(game.getLogo())) {
            throw new ApiRequestException(game.getLogo() + "is not a valid link");
        }
        gameDataAccessService.insertGame(newGameId, game);
    }
}
