package com.gamingratings.gamingratings.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class GameService {

    private final GameDataAccessService gameDataAccessService;

    @Autowired
    public GameService(GameDataAccessService gameDataAccessService) {
        this.gameDataAccessService = gameDataAccessService;
    }


    public List<Game> getAllGames() {
    return gameDataAccessService.selectAllGames();
    }
}
