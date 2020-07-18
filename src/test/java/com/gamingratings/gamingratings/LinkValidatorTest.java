package com.gamingratings.gamingratings;

import org.junit.Test;


import static org.assertj.core.api.Assertions.assertThat;

public class LinkValidatorTest {

    private final LinkValidator underTest = new LinkValidator();

    @Test
    public void itShouldValidateCorrectLink() {
    assertThat(underTest.test("https://www.google.de")).isTrue();
    }

    @Test
    public void itShouldValidateInCorrectLink() {
        assertThat(underTest.test("testlink")).isFalse();
    }

}