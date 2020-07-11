package com.gamingratings.gamingratings.student;

import java.util.UUID;

public class Game {

    private final UUID gameId;
    private final String name;
    private final String genre;
    private final int rating;

    public Game(UUID gameId, String name, String genre, int rating) {
        this.gameId = gameId;
        this.name = name;
        this.genre = genre;
        this.rating = rating;
    }

    public UUID getGameId() {
        return gameId;
    }

    public String getName() {
        return name;
    }

    public String getGenre() {
        return genre;
    }

    public int getRating() {
        return rating;
    }
}


