package com.gamingratings.gamingratings.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
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

    List<Game> selectAllGames() {
        String sql = "" +
                "SELECT " +
                "game_id," +
                "name," +
                "genre," +
                "rating," +
                "logo " +
                "FROM game";
       return jdbcTemplate.query(sql, mapGameFromDb());
    }

    private RowMapper<Game> mapGameFromDb() {
        return (resultSet, i) -> {
             String gameIdStr = resultSet.getString("game_id");
             UUID gameId = UUID.fromString(gameIdStr);

             String name = resultSet.getString("name");
             String genre = resultSet.getString("genre");
             Integer rating = resultSet.getInt("rating");
             String logo = resultSet.getString("logo");
             return new Game(
                     gameId,
                     name,
                     genre,
                     rating,
                     logo
             );
         };
    }
}
