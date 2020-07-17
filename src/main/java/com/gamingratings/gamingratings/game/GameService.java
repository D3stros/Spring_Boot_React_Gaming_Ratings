package com.gamingratings.gamingratings.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class GameService {

    private final GameDataAccessService gameDataAccessService;

    @Autowired
    public GameService(GameDataAccessService gameDataAccessService) {
        this.gameDataAccessService = gameDataAccessService;
    }


    List<Game> getAllGames() {
        return gameDataAccessService.selectAllGames();
    }

    void addNewGame(Game game) {
        addNewGame(null, game);
    }

    void addNewGame(UUID gameId, Game game) {
        UUID newGameId = Optional.ofNullable(gameId).orElse(UUID.randomUUID());

        gameDataAccessService.insertGame(newGameId, game);
    }
}
