-- CreateTable
CREATE TABLE "Chicken" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "tag" TEXT,
    "badges" TEXT[],
    "age" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "vaccine" TEXT NOT NULL,
    "nutrition" TEXT NOT NULL,
    "hygiene" TEXT NOT NULL,
    "gallery" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chicken_pkey" PRIMARY KEY ("id")
);
