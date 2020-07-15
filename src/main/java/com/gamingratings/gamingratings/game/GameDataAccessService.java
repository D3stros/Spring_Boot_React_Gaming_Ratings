package com.gamingratings.gamingratings.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class GameDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public GameDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Game> selectAllGames() {
        String sql = "" +
                "SELECT" +
                "game_id," +
                "name," +
                "genre," +
                "rating" +
                "logo" +
                "FROM game";
        List<Game> games = jdbcTemplate.query(sql, (resultSet, i) -> {
            return null;
        });
    return null;
    }
}
