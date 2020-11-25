CREATE TABLE bs_ability_quota ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_ability_quota', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_admin_group ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_admin_group', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_announce ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_announce', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_approve ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_approve', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_approve_general ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_approve_general', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_approve_node ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_approve_node', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_ask_report ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_ask_report', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_attendance ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_attendance', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_attendance_details ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_attendance_details', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_blog ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_blog', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_blog_attention ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_blog_attention', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_blog_tags ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_blog_tags', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_blog_watchtag ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_blog_watchtag', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_blogger ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_blogger', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_bug_logging ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_bug_logging', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_car_apply ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_car_apply', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_comments ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_comments', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_communication ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_communication', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_company_info ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_company_info', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_document ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_document', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_document_item ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_document_item', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_dynamic ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_dynamic', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_egress ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_egress', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_entry_job ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_entry_job', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_entry_man ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_entry_man', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_favor_info ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_favor_info', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_free_process ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_free_process', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_free_process_h ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_free_process_h', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_goods ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_goods', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_goods_borrow ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_goods_borrow', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_goods_receive ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_goods_receive', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_home_pictures ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_home_pictures', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_hrmresource ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_hrmresource', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_issue ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_issue', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_job_logging ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_job_logging', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_leave ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_leave', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_lost_property ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_lost_property', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_market_info ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_market_info', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_message ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_message', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_mireanna ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_mireanna', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_mireanna_item ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_mireanna_item', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_month_job_logging ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_month_job_logging', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_news ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_news', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_notice ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_notice', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_official_seal ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_official_seal', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_overtime ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_overtime', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_payment ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_payment', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_plan_task ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_plan_task', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_plan_task_item ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_plan_task_item', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_plan_task_mission ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_plan_task_mission', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_product_logging ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_product_logging', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_project_logging ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_project_logging', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_purchase ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_purchase', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_purchase_item ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_purchase_item', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_quarter_job_logging ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_quarter_job_logging', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_questions ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_questions', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_questions_rs ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_questions_rs', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_record_borrow ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_record_borrow', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_recruit ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_recruit', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_redhead ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_redhead', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_registor ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_registor', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_regular_apply ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_regular_apply', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_reim ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_reim', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_reim_item ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_reim_item', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_repair_apply ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_repair_apply', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_report_job_logging ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_report_job_logging', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_requirement ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_requirement', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_reserve ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_reserve', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_resign ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_resign', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_reward_apply ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_reward_apply', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_reward_data ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_reward_data', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_reward_items ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_reward_items', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_salary ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_salary', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_seal_contract ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_seal_contract', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_seal_declare ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_seal_declare', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_seal_normal ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_seal_normal', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_seal_regist ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_seal_regist', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_seal_registed ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_seal_registed', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_shifts_apply ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_shifts_apply', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_short_link ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_short_link', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_sign ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_sign', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_sign_in ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_sign_in', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_sign_up ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_sign_up', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_sign_work ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_sign_work', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_task_assign ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_task_assign', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_task_logging ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_task_logging', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_team ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_team', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_traffic_allowance ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_traffic_allowance', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_transaction ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_transaction', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_travel ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_travel', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_user_info ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_user_info', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_visit_apply ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_visit_apply', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_visit_appointment ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_visit_appointment', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_wedepart ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_wedepart', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_week_job_logging ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_week_job_logging', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_wework_depart ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_wework_depart', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE bs_wework_user ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_wework_user', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_work_contact ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_work_contact', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_work_contact_item ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_work_contact_item', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_work_examine ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_work_examine', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_work_examine_items ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_work_examine_items', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE bs_year_job_logging ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'bs_year_job_logging', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_activity ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_activity', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_collections ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_collections', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_fields ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_fields', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_files ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_files', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_folders ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_folders', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_migrations ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_migrations', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_permissions ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_permissions', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_presets ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_presets', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_relations ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_relations', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_revisions ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_revisions', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_roles ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_roles', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_sessions ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_sessions', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_settings ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_settings', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_users ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_users', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE directus_webhooks ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'directus_webhooks', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE flyway_schema_history ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'flyway_schema_history', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE onl_cgform_button ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'onl_cgform_button', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE onl_cgform_enhance_java ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'onl_cgform_enhance_java', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE onl_cgform_enhance_js ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'onl_cgform_enhance_js', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE onl_cgform_enhance_sql ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'onl_cgform_enhance_sql', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE onl_cgform_field ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'onl_cgform_field', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE onl_cgform_head ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'onl_cgform_head', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE onl_cgform_index ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'onl_cgform_index', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE onl_cgreport_head ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'onl_cgreport_head', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE onl_cgreport_item ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'onl_cgreport_item', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE onl_cgreport_param ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'onl_cgreport_param', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pear_collection ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_collection', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_department ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_department', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_department_member ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_department_member', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_file ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_file', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pear_invite_link ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_invite_link', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_lock ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_lock', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_mailqueue ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_mailqueue', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_member ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_member', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_member_account ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_member_account', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_notify ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_notify', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pear_organization ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_organization', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_auth ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_auth', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_auth_node ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_auth_node', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_collection ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_collection', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_config ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_config', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_features ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_features', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_info ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_info', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pear_project_log ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_log', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_member ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_member', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_menu ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_menu', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_node ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_node', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_report ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_report', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_template ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_template', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_project_version ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_version', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pear_project_version_log ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_project_version_log', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_source_link ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_source_link', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_system_config ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_system_config', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_system_log ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_system_log', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pear_task ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_task', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_task_like ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_task_like', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_task_member ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_task_member', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_task_stages ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_task_stages', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_task_stages_template ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_task_stages_template', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pear_task_tag ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_task_tag', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_task_to_tag ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_task_to_tag', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_task_work_time ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_task_work_time', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_task_workflow ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_task_workflow', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_task_workflow_rule ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_task_workflow_rule', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pear_team ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_team', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pear_user_token ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pear_user_token', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pr_business ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_business', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pr_business_status ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_business_status', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pr_businesses ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_businesses', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pr_collection ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_collection', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pr_design ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_design', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pr_flow ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_flow', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pr_log ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_log', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pr_log_history ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_log_history', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pr_log_informed ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_log_informed', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE pr_rights ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_rights', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE pr_template ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'pr_template', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE qrtz_blob_triggers ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_blob_triggers', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE qrtz_calendars ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_calendars', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE qrtz_cron_triggers ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_cron_triggers', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE qrtz_fired_triggers ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_fired_triggers', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE qrtz_job_details ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_job_details', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE qrtz_locks ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_locks', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE qrtz_paused_trigger_grps ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_paused_trigger_grps', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE qrtz_scheduler_state ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_scheduler_state', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE qrtz_simple_triggers ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_simple_triggers', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE qrtz_simprop_triggers ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_simprop_triggers', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE qrtz_triggers ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'qrtz_triggers', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE sys_announcement ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_announcement', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_announcement_send ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_announcement_send', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_category ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_category', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_check_rule ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_check_rule', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_data_log ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_data_log', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_data_source ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_data_source', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_depart ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_depart', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE sys_depart_permission ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_depart_permission', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_depart_role ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_depart_role', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_depart_role_permission ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_depart_role_permission', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_depart_role_user ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_depart_role_user', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_dict ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_dict', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_dict_item ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_dict_item', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_fill_rule ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_fill_rule', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE sys_log ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_log', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_permission ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_permission', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_permission_data_rule ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_permission_data_rule', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_position ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_position', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_quartz_job ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_quartz_job', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_role ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_role', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_role_permission ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_role_permission', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_sms ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_sms', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_sms_template ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_sms_template', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_user ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_user', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_user_agent ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_user_agent', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_user_depart ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_user_depart', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE sys_user_role ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'sys_user_role', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE t_channel ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_channel', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_channel_listener ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_channel_listener', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_chatroom ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_chatroom', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_friend ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_friend', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_friend_request ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_friend_request', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_group ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_group', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_group_member ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_group_member', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_id_generator ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_id_generator', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE t_messages ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_messages', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_robot ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_robot', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_sensitiveword ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_sensitiveword', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_thing ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_thing', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_user ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_user', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE t_user_messages ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_user_messages', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE t_user_session ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_user_session', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE t_user_setting ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_user_setting', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE t_user_status ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 't_user_status', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE tank30_bridge ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_bridge', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE tank30_dashboard ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_dashboard', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE tank30_download_token ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_download_token', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE tank30_footprint ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_footprint', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE tank30_image_cache ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_image_cache', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE tank30_matter ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_matter', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE tank30_preference ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_preference', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE tank30_session ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_session', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE tank30_share ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_share', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE tank30_upload_token ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_upload_token', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE tank30_user ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'tank30_user', 'mysqldumpuser', 'mysqldumpuser') ;

CREATE TABLE w_advice ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'w_advice', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE w_comment ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'w_comment', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE w_douban ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'w_douban', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE w_evaluation ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'w_evaluation', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE w_img ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'w_img', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE w_menu ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'w_menu', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE w_news ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'w_news', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE w_news2 ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'w_news2', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE w_news2 ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'w_theme', 'mysqldumpuser', 'mysqldumpuser') ;
CREATE TABLE w_user ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('172.18.254.95:3309', 'jeecg-boot', 'w_user', 'mysqldumpuser', 'mysqldumpuser') ;
