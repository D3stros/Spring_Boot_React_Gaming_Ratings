package com.gamingratings.gamingratings.game;

import java.util.UUID;

public class Game {

    private final UUID gameId;
    private final String name;
    private final String genre;
    private final int rating;
    private final String logo;

    public Game(UUID gameId, String name, String genre, int rating, String logo) {
        this.gameId = gameId;
        this.name = name;
        this.genre = genre;
        this.rating = rating;
        this.logo = logo;
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

    public int getRating() { return rating; }

    public String getLogo() { return logo; }
}


