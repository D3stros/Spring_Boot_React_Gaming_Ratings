package com.gamingratings.gamingratings;

import org.springframework.stereotype.Component;

import java.util.function.Predicate;
import java.util.regex.Pattern;

@Component
public class LinkValidator implements Predicate<String> {
    public static final Predicate<String> IS_LINK_VALID =
    Pattern.compile("(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?",
    Pattern.CASE_INSENSITIVE).asPredicate();

    @Override
    public boolean test(String link) {
        return IS_LINK_VALID.test(link);
    }
}
