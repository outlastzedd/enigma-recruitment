// src/services/jobServices.ts
import { Job } from '@/types/models';

export async function getJob(jobid: string): Promise<Job> {
    const response = await fetch(`/api/jobs/${jobid}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return response.json();
}