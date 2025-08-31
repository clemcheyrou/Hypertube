ALTER TABLE "users" ADD COLUMN "email" varchar(255) NOT NULL;
ALTER TABLE "users" ADD COLUMN "first_name" varchar(255) NOT NULL;
ALTER TABLE "users" ADD COLUMN "last_name" varchar(255) NOT NULL;
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");