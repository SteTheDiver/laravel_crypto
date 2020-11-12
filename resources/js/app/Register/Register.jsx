import React, { useState, useEffect } from "react";

export default function Register() {
    return (
        <form action="" className="register-form" method="post">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" value="name" />
            </div>

            <div className="form-group">
                <label htmlFor="name">Email</label>
                <input type="email" value="name" />
            </div>

            <div className="form-group">
                <label htmlFor="name">Password</label>
                <input type="password" value="name" />
            </div>

            <div className="form-group">
                <label htmlFor="name">Re-type your password</label>
                <input type="password" value="name" />
            </div>
        </form>
    );
}
