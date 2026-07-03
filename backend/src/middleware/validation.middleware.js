import { ZodError } from "zod";
import ApiError from "../utils/ApiError.js";

const validate = (schema) => {
    return async (req, res, next) => {
        try {

            req.body = await schema.parseAsync(req.body);

            next();

        } catch (error) {

            if (error instanceof ZodError) {

                const validationErrors = error.issues.map((err) => ({
                    field: err.path.join("."),
                    message: err.message,
                }));

                return next(
                    new ApiError(
                        400,
                        "Validation failed.",
                        validationErrors
                    )
                );

            }

            return next(error);

        }
    };
};

export default validate;