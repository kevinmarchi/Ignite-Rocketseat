<?php

namespace App\Livewire\Projects;

use App\Models\Project;
use Livewire\Component;

class Index extends Component
{

    public $projects;

    public function render()
    {
        $this->projects = Project::query()->inRandomOrder()->get();

        return view('livewire.projects.index');
    }
}
