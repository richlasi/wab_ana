import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";
import { trackProgress } from "../controllers/progressController";

const router = Router();

// Users must be signed in
router.post("/", requireAuth, trackProgress);

export default router;