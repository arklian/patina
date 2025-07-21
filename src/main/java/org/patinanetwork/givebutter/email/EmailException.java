package org.patinanetwork.givebutter.email;

public class EmailException extends Exception {
    public EmailException() {
        super();
    }

    public EmailException(final String message) {
        super(message);
    }

    public EmailException(final String message, final Throwable e) {
        super(message, e);
    }
}
