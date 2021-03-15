<?php
class board_model extends CI_Model
{
	public function __construct()
	{
		$this->load->database();
	}

	public function insert_board()
	{
		$this->load->helper("date");

		$data = [
			"name" => $this->input->post("name"),
			"title" => $this->input->post("title"),
			"contents" => $this->input->post("contents"),
		];

		$this->db->set("create_date", "now()", false);

		return $this->db->insert("board", $data);
	}
}
