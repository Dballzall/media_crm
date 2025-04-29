-- Add media relations fields to contacts table
ALTER TABLE "public"."contacts" 
ADD COLUMN "outlet" text,
ADD COLUMN "beat" text,
ADD COLUMN "region" text,
ADD COLUMN "preferred_topics" text,
ADD COLUMN "relationship_status" text;

-- Update the contacts_summary view to include the new fields
CREATE OR REPLACE VIEW "public"."contacts_summary" AS
SELECT 
  c.id,
  c.first_name,
  c.last_name,
  c.gender,
  c.title,
  c.background,
  c.avatar,
  c.first_seen,
  c.last_seen,
  c.status,
  c.tags,
  c.company_id,
  c.sales_id,
  c.linkedin_url,
  c.email_jsonb,
  c.phone_jsonb,
  c.outlet,
  c.beat,
  c.region,
  c.preferred_topics,
  c.relationship_status,
  co.name AS company_name,
  count(t.id) AS nb_tasks
FROM contacts c
LEFT JOIN companies co ON c.company_id = co.id
LEFT JOIN tasks t ON t.contact_id = c.id AND t.done_date IS NULL
GROUP BY c.id, co.name;
