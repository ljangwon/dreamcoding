<?php
defined("BASEPATH") or exit("No direct script access allowed");

class Datatable extends CI_Controller
{
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function __construct()
	{
		parent::__construct();
		//$this->load->model("datatable_model");
		//		$this->load->helper("url");
	}

	public function table1()
	{
		$this->load->view("table/table1");
	}
	public function table2()
	{
		$this->load->view("table/table2");
	}
	public function salary()
	{
		$this->load->view("table/salary");
	}

}
