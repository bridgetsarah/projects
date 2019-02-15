def profile():
    grid=SQLFORM.grid(db.USER, user_signature=False)
    return locals