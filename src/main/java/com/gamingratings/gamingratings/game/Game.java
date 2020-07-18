package com.gamingratings.gamingratings.game;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;
import java.util.UUID;

public class Game {

    private final UUID gameId;
    @NotBlank
    private final String name;
    @NotBlank
    private final String genre;
    @NotNull
    private final int rating;
    @NotBlank
    private final String logo;

    public Game(@JsonProperty("gameId") UUID gameId,
                @JsonProperty("name") String name,
                @JsonProperty("genre") String genre,
                @JsonProperty("rating") int rating,
                @JsonProperty("logo") String logo) {
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

    public int getRating() {
        return rating;
    }

    public String getLogo() {
        return logo;
    }

    @Override
    public String toString() {
        return "Game{" +
                "gameId=" + gameId +
                ", name='" + name + '\'' +
                ", genre='" + genre + '\'' +
                ", rating=" + rating +
                ", logo='" + logo + '\'' +
                '}';
    }
}


