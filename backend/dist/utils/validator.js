import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                return next();
            }
            return res.status(422).json({ errors: errors.array() });
        }
    };
};
export const loginValidator = [
    body("email").trim().isEmail().notEmpty().withMessage("email is required"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .notEmpty()
        .withMessage("passowrd should br at least 6 charachtes"),
];
export const signupValidator = [
    body("name").notEmpty().withMessage("name is required"),
    ...loginValidator,
];
//# sourceMappingURL=validator.js.map