export const sopUserAllSop={
    fieldToRetrieve:'procedure|sop_id|brief_summary|sop_name|status|file_link',
};
export const sopUserPendingSop={
    fieldToRetrieve:'procedure|sop_id|brief_summary|sop_name|status|file_link',
};
export const sopUserAllSop_fieldToRetrieve='procedure|sop_id|brief_summary|sop_name|status|file_link';
export const sopUserPendingSop_fieldToRetrieve='procedure|sop_id|brief_summary|sop_name|status|file_link';
// export const sopUserProcedureSop_fieldToRetrieve='procedure|sop_id|brief_summary|sop_name|sop_version|sop_revision|current_status|file_link';

export const sopStatusLabel={
  pass:{label_en:'Certified', label_es:'Certificado'},
  not_pass:{label_en:'Not Certified', label_es:'No Certificado'}
}
export const sopMySops_buttons=[
	{
	  "name": "SOP_MARK_AS_COMPLETED",
	  "label_en": "Mark Completed", "label_es": "Marcar Completado",
	  "type": "icon-button",
	  "icon_name": "icons:restore-page", "icon_color": "aqua",
	  "esign_required": false,
	  "read_only": false,
	}
];
export const sopMySops_cardContent={
  display_pdf_link: true,
  display_certification_status_icon: true,
  sopFieldsToDisplay:['procedure', 'sop_name', 'brief_summary'],  
};

export const sopMyPendingSops_cardContent={
	display_pdf_link: true,
	display_certification_status_icon: true,
	sopFieldsToDisplay:['procedure', 'sop_name', 'brief_summary'],  
}  
export const sopMyPendingSops_buttons=[
	{
	  "name": "SOP_MARK_AS_COMPLETED",
	  "label_en": "Mark Completed", "label_es": "Marcar Completado",
	  "type": "icon-button",
	  "icon_name": "icons:restore-page", "icon_color": "aqua",
	  "esign_required": false,
	  "read_only": false,
	}
];
