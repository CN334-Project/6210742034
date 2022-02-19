<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(['data' => Education::all(), "Response" => "True"]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $education = new Education();
        $education->university_name = $request->input('university_name');
        $education->department_name = $request->input('department_name');
        $education->GPA = $request->input('GPA');
        $education->faculty = $request->input('faculty');
        $education->startyear = $request->input('startyear');
        $education->endyear = $request->input('endyear');
        $education->save();

        return response()->json(['data' => $education]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $education = Education::find($id);
        return response()->json($education);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $education = Education::find($id);

        $education->university_name = $request->university_name;
        $education->department_name = $request->department_name;
        $education->GPA = $request->GPA;
        $education->faculty = $request->faculty;
        $education->startyear = $request->startyear;
        $education->endyear = $request->endyear;

        return response()->json(['name' => 'update', 'status' => $education->save(),  'payload' => $request->all(), 'id' => $id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $education = Education::find($id);
        return response()->json(['name' => 'destroy', 'status' => $education->delete(), 'id' => $id]);
    }
}
